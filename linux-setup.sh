#! /bin/bash

# Safety check for GIT_EMAIL
if [ -z "$GIT_EMAIL" ]; then
    echo "Error: GIT_EMAIL is not set. Run 'export GIT_EMAIL=\"your@email.com\"' first."
    exit 1
fi

log_message() {
    echo "[$(date)] $1"
}

ZSH_SNIPPET='if [ -f /usr/bin/zsh ]; then
  export SHELL=/usr/bin/zsh
  exec /usr/bin/zsh -l
fi'

log_message "Setting up Linux environment..."
sudo hostnamectl set-hostname AtomSpace

log_message "Font Scaling for my poor eyes (LOL)"
kwriteconfig6 --file kdeglobals --group KScreen --key ScaleFactor 1.25

log_message "Creating work dirs"
mkdir -p ~/Research ~/Coding

# At first fedora doesn't detect the pixel buds, dunno why!!!!
sudo sed -i 's/^#\?ControllerMode.*/ControllerMode = dual/' /etc/bluetooth/main.conf && sudo systemctl restart bluetooth

log_message "Optimizing DNF"
# Add DNF optimizations if they don't already exist
if ! grep -q "max_parallel_downloads=10" /etc/dnf/dnf.conf; then
    echo "max_parallel_downloads=10" | sudo tee -a /etc/dnf/dnf.conf > /dev/null
fi
if ! grep -q "fastestmirror=True" /etc/dnf/dnf.conf; then
    echo "fastestmirror=True" | sudo tee -a /etc/dnf/dnf.conf > /dev/null
fi
if ! grep -q "defaultyes=True" /etc/dnf/dnf.conf; then
    echo "defaultyes=True" | sudo tee -a /etc/dnf/dnf.conf > /dev/null
fi

sudo dnf upgrade --refresh -y

log_message "Enabling RPM Fusion"
sudo dnf install -y https://mirrors.rpmfusion.org/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm https://mirrors.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-$(rpm -E %fedora).noarch.rpm
sudo dnf install -y dnf5-plugins

log_message "Full version of FFMPEG"
sudo dnf swap -y ffmpeg-free ffmpeg --allowerasing
sudo dnf update -y @multimedia --setopt="install_weak_deps=False"

log_message "Essential software"
# Brave browser
curl -fsS https://dl.brave.com/install.sh | sh

# Flatpaks
flatpak install -y flathub md.obsidian.Obsidian
flatpak install -y flathub org.videolan.VLC
flatpak install -y flathub org.zotero.Zotero
flatpak install -y flathub com.obsproject.Studio
flatpak install -y flathub org.kde.kdenlive
flatpak install -y flathub com.heroicgameslauncher.hgl

sudo dnf install -y gromit-mpx telegram-desktop steam

# Zoom
sudo curl --location https://repo.zoom.us/repo/rpm/zoom_release.repo --output /etc/yum.repos.d/zoom_release.repo
sudo rpmkeys --import https://zoom.us/linux/download/pubkey\?version\=6-3-10
sudo dnf install -y zoom

log_message "Installing Zsh & Oh-My-ZSH"
sudo dnf install -y zsh util-linux-user

# Unattended Oh-My-Zsh installation
RUNZSH=no CHSH=no sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)" "" --unattended

# Clone plugins
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting

log_message "Installing terminal utilities"
sudo dnf install -y fastfetch bat fzf eza zoxide fd-find ripgrep tldr btop duf dust jq micro

log_message "Installing DevTools"
# vscode
sudo rpm --import https://packages.microsoft.com/keys/microsoft.asc && \
echo -e "[code]\nname=Visual Studio Code\nbaseurl=https://packages.microsoft.com/yumrepos/vscode\nenabled=1\nautorefresh=1\ntype=rpm-md\ngpgcheck=1\ngpgkey=https://packages.microsoft.com/keys/microsoft.asc" | sudo tee /etc/yum.repos.d/vscode.repo > /dev/null

sudo dnf check-update ; sudo dnf install -y code

# Ghostty
sudo dnf install -y --nogpgcheck --repofrompath 'terra,https://repos.fyralabs.com/terra$releasever' terra-release
sudo dnf install -y ghostty

curl -fsSL https://bun.sh/install | bash
bun install -g @google/gemini-cli

curl -LsSf https://astral.sh/uv/install.sh | sh
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y

sudo dnf install -y zig golang gcc gcc-c++

log_message "Github CLI"
git config --global user.name "thiomajid"
git config --global user.email "$GIT_EMAIL"

sudo dnf config-manager addrepo --from-repofile=https://cli.github.com/packages/rpm/gh-cli.repo
sudo dnf install -y gh

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.4/install.sh | bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
nvm install 24

curl -fsSL https://tailscale.com/install.sh | sh
sudo tailscale up --ssh

log_message "Configuring Zsh Handoff..."
# Only add it if it is not already there
if ! grep -q "exec /usr/bin/zsh -l" ~/.bashrc; then
    echo "Prepending Zsh hand-off to .bashrc..."
    echo -e "$ZSH_SNIPPET\n\n$(cat ~/.bashrc)" > ~/.bashrc
fi

log_message "All set.........."
#! /bin/bash

echo "Setting up Linux environment..."
echo "Updating package list..."
sudo apt update

echo "Installing essential packages..."
sudo apt install -y build-essential git curl wget

echo "Installing essential software..."
curl -fsS https://dl.brave.com/install.sh | sh
curl -f https://zed.dev/install.sh | sh
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
sudo snap install go
sudo snap install gopls
sudo snap install uv
sudo snap install btop
sudo snap install obsidian
sudo snap install telegram-desktop
sudo snap install android-studio
sudo snap install flutter

curl -fsSL https://bun.sh/install | bash

git config --global user.name "thiomajid"
git config --global user.email $GIT_EMAIL

(type -p wget >/dev/null || (sudo apt update && sudo apt-get install wget -y)) 	&& sudo mkdir -p -m 755 /etc/apt/keyrings         && out=$(mktemp) && wget -nv -O$out https://cli.github.com/packages/githubcli-archive-keyring.gpg         && cat $out | sudo tee /etc/apt/keyrings/githubcli-archive-keyring.gpg > /dev/null 	&& sudo chmod go+r /etc/apt/keyrings/githubcli-archive-keyring.gpg 	&& echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" | sudo tee /etc/apt/sources.list.d/github-cli.list > /dev/null 	&& sudo apt update 	&& sudo apt install gh -y

gh auth login

echo "Installing additional software..."
sudo apt install neofetch -y
sudo apt install nodejs -y && sudo apt install npm -y
sudo apt install gnome-tweaks -y
sudo apt install gnome-shell-extensions -y


sudo apt install xournalpp -y
sudo apt install flameshot -y
sudo apt-get install ripgrep -y
sudo apt install gpg -y
sudo mkdir -p /etc/apt/keyrings
wget -qO- https://raw.githubusercontent.com/eza-community/eza/main/deb.asc | sudo gpg --dearmor -o /etc/apt/keyrings/gierens.gpg
echo "deb [signed-by=/etc/apt/keyrings/gierens.gpg] http://deb.gierens.de stable main" | sudo tee /etc/apt/sources.list.d/gierens.list
sudo chmod 644 /etc/apt/keyrings/gierens.gpg /etc/apt/sources.list.d/gierens.list
sudo apt install eza -y
curl -sSfL https://raw.githubusercontent.com/ajeetdsouza/zoxide/main/install.sh | sh


echo "Finilazing setup"
sudo apt update && sudo apt upgrade -y
sudo apt autoremove

echo "All set.........."

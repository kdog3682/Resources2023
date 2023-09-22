#!/bin/bash

# Usage: 
# chmod +x install.sh
# install.sh

# Do this Manually
# Retrieve setup files from Google Drive
# requirements.txt (for python packages)
# package.json     (for javascript packages)

function move() {
    cp /mnt/chromeos/GoogleDrive/MyDrive/INSTALL/$1 /home/kdog3682/$1
}

move requirements.txt
move package.json



# Update the package lists and upgrade existing packages
sudo apt-get update
sudo apt-get upgrade -y
sudo apt-get install curl gnupg -y

# Install Node.js and npm
curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt-get install -y nodejs

# Configure npm 
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'

# Install Python
sudo apt-get install -y python3 python3-pip

# Verify the installations
node -v
npm -v
python3 --version
pip3 --version

# Clone a GitHub repository (replace with your GitHub repository URL)
git clone https://github.com/kdog3682/2023
git clone https://github.com/kdog3682/PYTHON
git clone https://github.com/kdog3682/RESOURCES
git clone https://github.com/kdog3682/WEBDEV

# Install Python libraries
pip3 install -r requirements.txt

# Install Node libraries
npm install

echo Finished with Installation!




# dunno
# npm jshint nodemon express prettier puppeteer
# npm cache clean -f
# npm install -g n
# n stable
# npm update node -g

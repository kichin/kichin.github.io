# -*- mode: ruby -*-
# vi: set ft=ruby :

# All Vagrant configuration is done below. The "2" in Vagrant.configure
# configures the configuration version (we support older styles for
# backwards compatibility). Please don't change it unless you know what
# you're doing.
Vagrant.configure(2) do |config|
  config.vm.box = "ubuntu/trusty64"
  config.vm.network :forwarded_port, guest: 4000, host: 4000 
  config.vm.synced_folder "/", "/vagrant_data"
  config.vm.provision "shell", path: "provision.sh"
  config.vm.provision :shell, path: "install-rvm.sh", args: "stable", privileged: false
  config.vm.provision :shell, path: "install-ruby.sh", args: "2.1.2", privileged: false
  config.vm.provision :shell, path: "install-ruby.sh", args: "rails jekyll therubyracer", privileged: false
end

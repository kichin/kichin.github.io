# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure(2) do |config|
  config.vm.box = "ubuntu/trusty64"
  config.vm.network :forwarded_port, guest: 4000, host: 4000 
  config.vm.synced_folder "/Users/wdkevo", "/../../vagrant"
  config.vm.provision "shell", path: "provision.sh"
  config.vm.provision :shell, path: "install-rvm.sh", args: "stable", privileged: false
  config.vm.provision :shell, path: "install-ruby.sh", args: "2.1.2", privileged: false
  config.vm.provision :shell, path: "install-ruby.sh", args: "rails jekyll therubyracer", privileged: false
  config.vm.provider "virtualbox" do |v|
    v.memory = 4096
    v.cpus = 2
  end
end

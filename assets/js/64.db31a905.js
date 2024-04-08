(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{959:function(s,e,n){"use strict";n.r(e);var a=n(6),t=Object(a.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"k8s使用ansible部署"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#k8s使用ansible部署"}},[s._v("#")]),s._v(" K8s使用ansible部署")]),s._v(" "),e("p",[s._v("脚本")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("mkdir {files,production,roles,templates}\ntouch {ansible.cfg,k8s_install.yml}\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("需要执行的yum命令")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("yum install -y yum-utils device-mapper-persistent-data lvm2\nyum-config-manager --add-repo https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo\nyum install wget jq psmisc vim net-tools telnet yum-utils device-mapper-persistent-data lvm2 git -y\nrpm -ivh http://mirrors.wlnmp.com/centos/wlnmp-release-centos.noarch.rpm\nyum install ntpdate -y\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("需要执行的shell命令")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("systemctl disable --now firewalld \nsystemctl disable --now dnsmasq\nsystemctl disable --now NetworkManager\n\nsetenforce 0\nsed -i 's#SELINUX=enforcing#SELINUX=disabled#g' /etc/sysconfig/selinux\nsed -i 's#SELINUX=enforcing#SELINUX=disabled#g' /etc/selinux/config\nswapoff -a && sysctl -w vm.swappiness=0\nsed -ri '/^[^#]*swap/s@^@#@' /etc/fstab\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br")])])])}),[],!1,null,null,null);e.default=t.exports}}]);
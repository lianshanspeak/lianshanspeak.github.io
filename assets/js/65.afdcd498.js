(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{960:function(o,e,n){"use strict";n.r(e);var r=n(6),s=Object(r.a)({},(function(){var o=this,e=o._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":o.$parent.slotKey}},[e("p",[o._v("root@localhost ~]# sudo yum-config-manager \\")]),o._v(" "),e("blockquote",[e("p",[o._v("--add-repo "),e("br"),o._v("\nhttps://download.docker.com/linux/centos/docker-ce.repo\nLoaded plugins: fastestmirror\n/usr/lib/python2.7/site-packages/yum/misc.py:133: UnicodeWarning: Unicode equal comparison failed to convert both arguments to Unicode - interpreting them as being unequal\nreturn lambda s: s.lower() == pat\n[root@localhost ~]# vim /usr/lib/python2.7/site-packages/yum/misc.py\n[root@localhost ~]# sudo yum-config-manager   --add-repo  https://download.docker.com/linux/centos/docker-ce.repo\nLoaded plugins: fastestmirror\n[root@localhost ~]# sudo yum install docker-ce docker-ce-cli containerd.io\nLoaded plugins: fastestmirror\nLoading mirror speeds from cached hostfile\nepel/x86_64/metalink                                                                                        | 9.8 kB  00:00:00")])]),o._v(" "),e("ul",[e("li",[o._v("base: mirrors.cqu.edu.cn")])]),o._v(" "),e("p",[o._v("报错解决方法\nvim /usr/lib/python2.7/site-packages/yum/misc.py\nimport sys\nreload(sys)\nsys.setdefaultencoding('utf8')")]),o._v(" "),e("p",[o._v('配置国内加速\nsudo mkdir -p /etc/docker\nsudo tee /etc/docker/daemon.json <<-\'EOF\'\n{\n"registry-mirrors": ["https://82m9ar63.mirror.aliyuncs.com"]\n}\nEOF\nsudo systemctl daemon-reload\nsudo systemctl restart docker')]),o._v(" "),e("p",[o._v("重启失败，原因在处理/etc/docker/daemon.json的时候没有缩进，")]),o._v(" "),e("p",[o._v('[root@localhost ~]# cat /etc/docker/daemon.json\n{\n"registry-mirrors": ["https://82m9ar63.mirror.aliyuncs.com"]\n}\n[root@localhost ~]#\n重新配置缩进之后，重启成功\nsudo systemctl daemon-reload\nsudo systemctl restart docker')])])}),[],!1,null,null,null);e.default=s.exports}}]);
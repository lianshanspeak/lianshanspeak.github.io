(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{985:function(n,t,e){"use strict";e.r(t);var a=e(6),s=Object(a.a)({},(function(){var n=this,t=n._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h1",{attrs:{id:"wal记录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#wal记录"}},[n._v("#")]),n._v(" wal记录")]),n._v(" "),t("p",[n._v("数据先到wal buffer--\x3e在落盘保证数据\nlsn不断放大的号，确保回放，把最新的lsn，从上一次检查点重放\n保证数据库不丢数据\n是如何恢复的\n重放xlog从磁盘到wal buffer ，redo poin它中有lsn号，去和shared buffer中的lsn做对比，大的就回放\n块折断\nfull_page_writes作用：是否开启全页写入，为了防止块折断（块损坏）的一种策略\n判断：checksum值\n采用机制：在checkponit后的一个块第一次变脏后就要整块写入到wal日志中，\n后续修改这个块，只要把修改信息写入到wal日志\n断电重启，有块折断，\n则在全页写入的块为基础进行恢复\n最后覆盖磁盘上的折断块\n参数checkpoint_segments对checkpoint影响\n作用：控制checkpoint的间隔\n过大：恢复时间会变长\t\n过小：造成频繁的checkpoint进而导致写入了过多的全页，可能wal日志暴增\n检查点作用\n1.将事务提交的修改写进disk（写脏数据）；保证数据库的完整性和一致性。\n2.缩短恢复时间,将脏页写入相应的数据文件,确保修改后的文件通过fsync()写入到磁盘。\n触发条件：\n1、checkpoint_timeout设置时间\n2、为checkpoint_segments设置的 WAL 段文件的数量自上一个检查点以来已经被消耗（默认3）\n3、WAL 段文件的总大小已超过参数max_wal_size的值（默认值为 1GB（64 个文件））\n4、PostgreSQL 服务器在smart或fast模式下停止\n5、手动执行CHECKPOINT\n6、写入WAL的数据量已达到参数max_wal_size（默认值：1GB）\n7、执行pg_start_backup函数时\n8、在进行数据库配置时")]),n._v(" "),t("p",[n._v("pg_control文件\n包含检查点的基本信息，如果损坏或无法读取，则无法启动恢复过程，从而无法获得起点。")]),n._v(" "),t("p",[n._v("WAL段切换\n1、wal段文件被写满\n2、函数pg_switch——wal()被调用\n3、启用了archive_mode,且已经超过archive_timeout配置的超时时间。\narchive_timeout时间短会导致空间膨胀")])])}),[],!1,null,null,null);t.default=s.exports}}]);
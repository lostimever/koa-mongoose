# koa-mongoose
后台管理系统服务端

## 使用`mongoimport`导入数据
```bash
$  mongoimport --username=root --password=root --db=dmsmarket --collection=elecmeaterinfos --type=csv --headerline --ignoreBlanks --file /wlf/elecmeaterinfo.csv --authenticationDatabase=admin
# 或者json
$  mongoimport --username=root --password=root --db=dmsmarket --collection=elecmeaterinfos --type=json --jsonArray --file /wlf/elecmeaterinfo.json --authenticationDatabase=admin
```
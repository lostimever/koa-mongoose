# koa-mongoose
后台管理系统服务端

## 使用`mongoimport`导入数据
```
  mongoimport --username=root --password=root --db=dmsmarket --collection=elecmeaterinfo --type=csv --headerline --ignoreBlanks --file /wlf/elecmeaterinfo.csv --authenticationDatabase=admin
```
```
  mongoimport --username=root --password=root --db=dmsmarket --collection=elecmeaterinfos --type=json --jsonArray --file /wlf/elecmeaterinfo.json --authenticationDatabase=admin
```
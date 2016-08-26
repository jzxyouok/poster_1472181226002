#!/bin/sh
 cd "$(dirname "$0")"
current_time=$(date "+%Y.%m.%d-%H.%M.%S")
file_name=cms-$current_time
echo $file_name

/Applications/XAMPP/xamppfiles/bin/mysqldump -uroot cms > $file_name.sql
tar -zcvf $file_name.tar.zip $file_name.sql
rm $file_name.sql
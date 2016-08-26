package cn.dmesoft.haibao.modules.haibao.utils;


import com.github.underscore.lodash.$;

import java.util.Random;

/**
 * Created by zengyanli on 16/8/8.
 */
public class RandomUtil {

    public static String randOrderNo(){
        return randOrderNo(10, 0);
    }

    public static String randOrderNo(int length , int type ) {
        String[] arr = new String[]{
                "3425678934567892345678934567892",
                "ABCDEFGHJKLMNPQRSTUVWXY"
        };



        String code = "";
        String str = "";
        if (type == 0 ) {
            str = arr[0];
        }else if(type == -1){
            str  =  arr[0] + arr[1];
        }else{
            str = arr[type];
        }
        int count = str.length() -1;
        for(int i = 0; i < length; i++){
            Random ra =new Random();

            int start = ra.nextInt(count);

            code += str.substring(start, start + 1);
        }
        return code;

    }
}

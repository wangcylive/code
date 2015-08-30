/**
 * Created by wangcy on 2015/8/30.
 */
({
    cssIn: "../css/main.css",
    out: "../build/main.css",

    /**
     * none  不压缩，仅合并
     * standard  标准压缩 去换行、空格、注释
     * standard.keepLines  除标准压缩外，保留换行
     * standard.keepComments  除标准压缩外，保留注释
     * standard.keepComments.keepLines  除标准压缩外，保留换行和注释
     */
    optimizeCss: "standard"
})
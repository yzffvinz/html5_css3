## 颜色

### 常见颜色载体

1. color: 前景色
2. background-color: 背景色

### 颜色参数

1. 色调：通俗意义上的颜色
2. 饱和度：颜色中的灰色含量有关，饱和度越高，灰色含量越少
3. 亮度：颜色中的黑色含量有关，亮度越高，黑色含量越少
4. 对比度：对比度指的是一幅图像中明暗区域**最亮的白和最暗的黑**之间不同亮度层级的测量，差异范围越大代表对比越大。大多时候，阅读的场景，就是前景色与背景色，例：晚间模式

### CSS中定义色彩的方式

#### 浏览器预置颜色

浏览器可以识别100余种颜色定义，例如 DarkCyan

#### RGB

定义方式 rgb(100, 100, 90)，红绿蓝

#### 十六进制

#ee3e80: 16进制，前两位r，中间两位g，最后两位b

#### RGBA

rgba(100,100,90,0.5),类似于rgb的方式，多的一位位于0.0~1.0之间，表示透明度

### CSS3：HSL&HSLA

H：介于0°~360°间的一个数值，表示色调

S：饱和度，百分比表示

L：亮度，百分比表示

A：透明度，百分比表示

#### 一些实践：

1. 在某些浏览器可能不支持rgba以及hsla，这时候可以先定义rgb，在定义后两者，这样在可以支持的浏览器会覆盖原有获得更好的现实效果，版本较低的浏览器则会得到降级的显示（不至于样式失效）。
2. 


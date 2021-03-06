## 文本

### 外观属性

- 直接作用于字体及外观的属性：
  - 文本大小
  - 字型：
    - 普通字体
    - 粗体
    - 斜体
- 无论何种字体都会对文本产生同样的效果：
  - 文本颜色
  - 单词间距、字母间距

### 字体

#### 字体分类

- 衬线字体（SERIF）：字母笔画末端有一些额外的装饰。
  - [x] 适合阅读，常用于长篇文本
- 无衬线字体（SANS-SERIF）：字母拥有笔直的线条，更加简洁。
  - [x] 如果文本比较小，无衬线字体会显得更清晰
- 等宽字体（MONOSPACE）：每个字母宽度都相同。
  - [x] 等宽字体可以精确对齐，适合写代码

#### 字体样式

- 粗细
  - 可以起到强调作用
  - 影响空白区域大小及页面上的对比情况
- 样式：将普通样式进行一定角度倾斜，有些字体斜体是连笔风格
- 伸缩
  - 伸展：字母更宽，间距更大
  - 压缩：字母更窄，间距更小

#### 字体选择

- font-family：字体系列

```css
body {
  font-family: Georgia, Times, serif;
}
```

- font-face：服务端字体
```css
@font-face {
  font-family: 'ChunkFiveRegular';
  src: url('fonts/chunkfive.eot');
}
h1, h2 {
  font-family: ChunkFiveRegular, Georgia, serif;
}
```

不同浏览器支持不同的字体格式，有时候需要提供字体的多个变体

| IE6         | 仅支持 Embedded OpenType(.eot) 格式。                        |
| ----------- | ------------------------------------------------------------ |
| IE7         | 仅支持 Embedded OpenType(.eot) 格式。                        |
| IE8         | 仅支持 Embedded OpenType(.eot) 格式。                        |
| Firefox 3.5 | 支持 TrueType、OpenType(.ttf, .otf) 格式。                   |
| Firefox 3.6 | 支持 TrueType、OpenType(.ttf, .otf) 及 WOFF 格式。           |
| Chrome      | 支持 TrueType、OpenType(.ttf, .otf) 及 SVG Font(.svg) 格式。 |
| Safari      | 支持 TrueType、OpenType(.ttf, .otf) 及 SVG Font(.svg) 格式。 |
| Opera       | 支持 TrueType、OpenType(.ttf, .otf) 及 SVG Font(.svg) 格式。 |

在代码中应按照下列顺序：

1. eot
2. woff
3. ttf/otf
4. svg

例：

```css
@font-face {
  font-family: 'ChunkFiveRegular';
  src: url('fonts/chunkfive.eot');
  src: url('fonts/chunkfive.eot?#iefix') format('embedded-opentype'),
       url('fonts/chunkfive.woff') format('woff'),
       url('fonts/chunkfive.ttf') format('truetype'),
       url('fonts/chunkfive.svg#ChunkFiveRegular') format('svg');
}
```

#### 字体大小

​	使用font-size来设置字体大小

```css
p {
  font-size: 16px;
  font-size: 1em;
  font-size: 1rem;
  font-size: 200%;
}
```

###### 默认大小

​	浏览器中默认文本大小为16px

###### 单位

1. ie无法调整哪些使用px作为单位的字体大小
2. 国外的大部分网站能够调整的原因在于其使用了em或rem作为字体单位
3. Firefox能够调整px和em，rem，但是96%以上的中国网民使用IE浏览器(或内核)。
4. em值不固定，相对于父元素
5. rem相对于html根元素

### 字型

#### 字型属性

##### 粗体 font-weight

- normal 400
- bold 700
- 数字

##### 斜体 font-style
- normal
- italic 手写倾斜
- oblique 书面倾斜

##### 大写&小写 text-transform

- uppercase
- lowercase
- capitalize 首字母大写

##### 下划线&删除线 text-decoration

- none
- underline baseline 下划线
- overline top-line
- line-through middle-line 删除线
- blink 文本闪烁

##### 行间距 line-height

leading是印刷行业在文本行的垂直空间上使用的一种术语

行高(line height) = 行间距 + 字号大小

初始值最好设定在1.4em ~ 1.5em之间

##### 字母间距 letter-spacing

字母之间的距离，一般可以不修改，对于大部分普通文档，增大或者缩小都会影响阅读

##### 单词间距 word-spacing

单词之间的距离，默认通常为0.25em

##### 对齐方式 text-align

- left 左
- right 右
- center 居中显示
- justify 两端对齐（比较整齐）

##### 垂直对齐 vertical-align

关于下面这些线的概念，详见[深入理解css基线与行高]( https://blog.csdn.net/it_queen/article/details/54729949 )

- baseline 基线
- sub 下标
- super 上标
- top 行框顶部
- text-top 文本顶线
- middle 文本中线
- bottom 行框底线
- text-bottom 文本底线

##### 文本缩进 text-indent

首行缩进量

##### css3：投影  text-shadow

text-shadow: h-shadow, v-shadow, blur, color;

| 值         | 描述                                                         |
| :--------- | :----------------------------------------------------------- |
| *h-shadow* | 必需。水平阴影的位置。允许负值。                             |
| *v-shadow* | 必需。垂直阴影的位置。允许负值。                             |
| *blur*     | 可选。模糊的距离。                                           |
| *color*    | 可选。阴影的颜色。参阅 [CSS 颜色值](https://www.w3school.com.cn/cssref/css_colors_legal.asp)。 |

#### 选择器

##### 首字母 :fist-letter

##### 首行文本 :first-line

##### 链接样式

- link 链接
- visited 已经点击过的
- :hover 悬停
- :active 按钮按下
- :focus 拥有焦点是

##### 特性选择器

| 选择器     | 含义     | 示例 |
| ---------- | -------- | ---- |
| []         | 存在     |      |
| [attr=""]  | 等于     |      |
| [attr~=""] | 其中一项 |      |
| [attr^=""] | 开头     |      |
| [attr*=""] | 包含     |      |
| [attr$=""] | 结尾     |      |



### 拓展资料

[深入理解css基线与行高]( https://blog.csdn.net/it_queen/article/details/54729949 )






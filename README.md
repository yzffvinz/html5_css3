# 知识点

## 2020-05

### Spotlight
- 参考资料：[聚光灯](https://www.bilibili.com/video/BV16E411N7Ru "spotlight")
 - 实现内容：Comp/spotlight
 - 条件：使用chrome浏览器

#### 整体设计

- h1内为文字内容，创建h1::after与之重合，spotlight（聚光灯）打到的地方显示伪类的内容，其余显示h1的内容
- 聚光灯的实现：
  - 在h1的伪类上创建视口(clip-path)，并绑定动画循环往复
  - 为h1伪类添加-webkit-background-clip:text，这样除了h1伪类中的文字其余的都不会被显示了
  - 再为h1的伪类添加一张花里胡哨的背景图片就好了

#### 布局

1. 居中布局（使用flex）

   ```css
   /* 父容器 */
   body {
       display: flex;
       justify-content: center;    /* 水平居中 */
       algin-items: center;		/* 竖直居中 */    
   }
   ```

2. Position（为什么好h1使用relative，其伪类使用absolute可以使两者重叠？）
   
   - Position的取值如下：
     - static：默认值。没有定位，出现在**正常**流
     - relative: 生成相对定位元素，通过top、bottom、left、right设置相对于**本身**进行定位
     - absolute: 生成绝对定位的元素，相对于**static定位外的第一个父元素**进行定位
     - fixed: 生成绝对定位的元素，相对于**浏览器窗口**进行定位
   - 所以使用如下的方式，可以使h1的伪类相对于h1进行布局，也就重合了
   
   ```css
   h1 {
       position: relative;
   }
   
   h1::after {
       content: 'Just  do it later';
       position: absolute;
   }
   ```
   



#### 属性

1. css3自适应布局单位

   - 相对于**视口**的
     - vw：1vw等于视口宽度的1%
     - vh：1vh等于视口高度的1%
     - vmin：选取vw和vh中最小的那个
     - vmax：选取vw和vh中最大的那个

   ```css
   /* 在body设定高度时，设置了100vh，也就是高度为视口的100% */
   body {
   	height: 100vh;
   }
   ```

2. clip-path
   
   - CSS属性创建一个裁剪区域，该区域设置应显示元素的哪一部分。区域内的部分显示，区域外的隐藏。
   
     ```css
     h1::after {
     	clip-path: circle(40%);
         clip-path: ellipse(20px 20px at 50% 100%);
         clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);    
     }
     
     ```

3. animation + @keyframes

   ```css
   /* 使用@keyframes定义帧 */
   @keyframes spotlight {
       0% {
           clip-path: ellipse(150px 100px at 15% 50%);
       }
   
       50% {
           clip-path: ellipse(150px 100px at 85% 50%);
       }
   
       100% {
           clip-path: ellipse(150px 100px at 15% 50%);
       }
   }
   ```

   ```css
   /* 伪类绑定动画5s往复，无限循环 */
   h1::after {
       animation: spotlight 5s infinite;
   }
   ```

4. -webkit-background-clip:text（**目前仅有chrome支持**）

   - 背景裁剪

   ```css
   /* 以区块内的文字作为裁剪区域向外裁剪，文字的背景即为区块的背景，文字之外的区域都将被裁剪掉 */
   h1::after {
       -webkit-background-clip: text;
   }
   ```

5. attr(xxxx)

   ```html
   /* 小技巧,css伪类中使用attr可以获得元素的值 */
   <h1 data-spolight="Just do it later">Just do it</h1>
   <style>
       h1::after {
           /* 这里的值就不用填写Just do it later了，直接获取html元素的值 */
           content: attr(data-spotlight);
       }
   </style>
   ```

### CSS：float

- 实现内容：Basic/float

#### 整体内容

1. float会使div的宽度最小化（默认最大化）
2. 清除浮动的方式
3. BFC（Blocking Formatting Context：块级可视化上下文）简介

#### 属性

1. 清除浮动的方式

   - 使用伪类

   ```css
   .container::after {
       content: '';
       clear: both;	/* 清除两侧浮动 */
       display: block; /* 设置伪类为块级作用域 */
   }
   ```

   - BFC
     - float不是none

   ```css
   .container {
       /* 下面两个方案2选1，但是方案2在ie浏览器不支持 */
       overflow: hidden;       /* 方案1：设置overflow为除了visiable的任何值 */
       display: flow-root;     /* 方案2：设置display为flow-root */
   }
   ```

#### 概念

1. BFC（Blocking Formatting Context：块级可视化上下文）

   ​		块格式化上下文对浮动定位（参见 [`float`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/float)）与清除浮动（参见 [`clear`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/clear)）都很重要。浮动定位和清除浮动时只会应用于同一个BFC内的元素。浮动不会影响其它BFC中元素的布局，而清除浮动只能清除同一BFC中在它前面的元素的浮动。外边距折叠（[Margin collapsing](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing)）也只会发生在属于同一BFC的块级元素之间。

   - 创建方式

     - 无副作用，但是支持性一般```display: flow-root;```
     - ```overflow```设置为`visible`之外的其他属性`auto`、`hidden`
     - 绝对定位元素```position:absolute;```或```position: fixed;```

     - 全部方式详见[MDN](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context)

   - 解决的问题

     - div高度塌陷（见float.html中的`.height`）
     - 外边距塌陷`margin collapsing`（见float.html中的`margin`）

#### 疑惑

1. 解决外边距塌陷的问题（貌似解决了）

   在需要解决的外边距塌陷的组件上添加一个wrapper，设置属性，使之成为一个bfc


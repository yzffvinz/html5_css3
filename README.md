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

   

   
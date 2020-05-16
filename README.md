# 知识点

## 2020-05

### Spotlight： [聚光灯](https://www.bilibili.com/video/BV16E411N7Ru "spotlight")

[🎈](. /Comps/spotlight)

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
   
3. 



#### 属性
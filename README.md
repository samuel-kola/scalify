# scalify
### Welcome to Scalify
It is very easy to create a dynamic scale. You just need to add the scalify script file and chain an element on the page that will load the scale and voila you have your very own dynamic scale. You can customize it to match your needs as well.

### Housekeeping
1. Download [Scalify](https://github.com/samuel-kola/scalify/zipball/master)

2. Add links to jquery (>=1.7), scalify.js and scalify.css to the page 
```html
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7/jquery.min.js"></script>
<script type="text/javascript" src="https://goo.gl/hYWDgQ"></script>
<link type="text/css" href="https://goo.gl/p4WKsR" rel="stylesheet" />
```

### Check-in
Once you have all your scripts in place you would need to select an element on the page to display the scale
```html
<div id="divScale"/>
```

Apply scalify to the above selected element
```javascript
$(function () {
     $("#divScale").scalify();
}
```

### Factory Settings
The plugin comes with pre-built options which can be customized

_padding_<br/>
Padding between counters<br/>
`Type`    - <b>`number`</b><br/>
`Default` - <b>`4`</b> (in pixels) <br/>
`Usage`   -  
```javascript
$(function () { 
     $("#divScale").scalify({ 
          padding: 4 
     }); 
}
```
_startCount_<br/>
Starting counter<br/>
`Type`    - <b>`number`</b><br/>
`Default` - <b>`0`</b><br/>
`Usage`   -  
```javascript
$(function () { 
     $("#divScale").scalify({ 
          startCount: 0
     }); 
}
```
_endCount_<br/>
Ending counter<br/>
`Type`    - <b>`number`</b><br/>
`Default` - <b>`100`</b><br/>
`Usage`   -  
```javascript
$(function () { 
     $("#divScale").scalify({ 
          endCount: 100
     }); 
}
```
_indicatorSize_<br/>
Size of the indicator dot<br/>
`Type`    - <b>`number`</b><br/>
`Default` - <b>`12`</b><br/>
`Usage`   -  
```javascript
$(function () { 
     $("#divScale").scalify({ 
          indicatorSize: 12
     }); 
}
```
_minorInterval_<br/>
Interval between two minor counters<br/>
`Type`    - <b>`number`</b><br/>
`Default` - <b>`1`</b><br/>
`Usage`   -  
```javascript
$(function () { 
     $("#divScale").scalify({ 
          minorInterval: 1
     }); 
}
```
_majorInterval_<br/>
Interval between two major counters<br/>
`Type`    - <b>`number`</b><br/>
`Default` - <b>`10`</b><br/>
`Usage`   -  
```javascript
$(function () { 
     $("#divScale").scalify({ 
          majorInterval: 10
     }); 
}
```
_showMajorIntervalText_<br/>
Show/hide major interval text<br/>
`Type`    - <b>`boolean`</b><br/>
`Default` - <b>`true`</b><br/>
`Usage`   -  
```javascript
$(function () { 
     $("#divScale").scalify({ 
          showMajorIntervalText: true
     }); 
}
```
_showMinorIntervalText_<br/>
Show/hide minor interval text<br/>
`Type`    - <b>`boolean`</b><br/>
`Default` - <b>`false`</b><br/>
`Usage`   -  
```javascript
$(function () { 
     $("#divScale").scalify({ 
          showMinorIntervalText: false
     }); 
}
```

_onScalerClick_<br/>
Event that is fired on scale click. This will give the currently selected value on the scale.<br/>
`Type`  - <b>`event`</b><br/>
`Usage` -  
```javascript
$(function () { 
     $("#divScale").scalify({ 
          onScalerClick: function () { 
               alert(this); 
          } 
     }); 
}
```
### Own-It
You can update any of the above settings to customize it to your needs

### Cruise
```html
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>Scalify Example</title>
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7/jquery.min.js"></script>
    <script type="text/javascript" src="https://goo.gl/j4fRk4"></script>
    <link type="text/css" href="https://goo.gl/gOYAxc" rel="stylesheet" />
	<script type="text/javascript">
        $(function () {
            $("#divScale").scalify({
                // padding between counters
                padding: 4,
                // start counter
                startCount: 0,
                // end counter
                endCount: 100,
                // size of the dot
                indicatorSize: 12,
                // interval between two minor counters
                minorInterval: 1,
                // interval between two major counters
                majorInterval: 10,
                // show/hide major interval text
                showMajorIntervalText: true,
                // show/hide minor interval text
                showMinorIntervalText: false,
                // event fired on scale click
                onScalerClick: function () {
                    $("#spnScaleData").text(this.toString());
                }
            });
        });
    </script>
</head>
<body>
    <div id="divScale"></div>
    <span id="spnScaleData" />
</body>
</html>
```

### Look and Feel
![Scalify](https://goo.gl/zClfja)

### Authors and Contributors
Samuel Kola (@samuel-kola)

### Support or Contact
Having trouble with Scalify? Check out [documentation](https://github.com/samuel-kola/scalify).


window.log=function(){log.history=log.history||[];log.history.push(arguments);if(this.console){arguments.callee=arguments.callee.caller;var a=[].slice.call(arguments);(typeof console.log==="object"?log.apply.call(console.log,console,a):console.log.apply(console,a))}};(function(e){function h(){}for(var g="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,timeStamp,profile,profileEnd,time,timeEnd,trace,warn".split(","),f;f=g.pop();){e[f]=e[f]||h}})((function(){try{console.log();return window.console}catch(a){return window.console={}}})());$("a[rel=popover]").popover({placement:"left"});$("span[rel=tooltip]").tooltip();$("input.type.platform").click(function(){if($(this).attr("checked")=="checked"){$("input.due_on").removeAttr("disabled");$("select.dependency").attr("disabled","disabled")}else{$("input.due_on").attr("disabled","disabled");$("select.dependency").removeAttr("disabled")}});$("input.type.product").click(function(){if($(this).attr("checked")=="checked"){$("input.due_on").attr("disabled","disabled");$("select.dependency").removeAttr("disabled")}else{$("input.due_on").removeAttr("disabled");$("select.dependency").attr("disabled","disabled")}});
var c,r,a={},l=$("#container-publications");if(l.length){l.isotope({itemSelector:".isotope-item",percentPosition:!0,masonry:{columnWidth:".grid-sizer"},filter:function(){let t=$(this),e=!c||t.text().match(c),o=!r||t.is(r);return e&&o}});let t=$(".filter-search").keyup(p((function(){c=new RegExp(t.val(),"gi"),l.isotope()})));$(".pub-filters").on("change",(function(){let t=$(this)[0].getAttribute("data-filter-group");if(a[t]=this.value,r=f(a),l.isotope(),"pubtype"===t){let t=$(this).val();".pubtype-"===t.substr(0,9)?window.location.hash=t.substr(9):window.location.hash=""}}))}function p(t,e){let o;return e=e||100,function(){clearTimeout(o);let i=arguments,n=this;function l(){t.apply(n,i)}o=setTimeout(l,e)}}function f(t){let e="";for(let o in t)e+=t[o];return e}function d(){if(!l.length)return;let t=window.location.hash.replace("#",""),e="*";""!=t&&!isNaN(t)&&(e=".pubtype-"+t);a.pubtype=e,r=f(a),l.isotope(),$(".pubtype-select").val(e)}document.addEventListener("DOMContentLoaded",(function(){$(".pub-filters-select")&&d(),$(".js-cite-modal").click((function(t){t.preventDefault();let e=$(this).attr("data-filename"),o=$("#modal");o.find(".modal-body code").load(e,(function(t,o,i){if("error"==o){let t="Error: ";$("#modal-error").html(t+i.status+" "+i.statusText)}else $(".js-download-cite").attr("href",e)})),o.modal("show")})),$(".js-copy-cite").click((function(t){t.preventDefault();let e=document.querySelector("#modal .modal-body code").innerHTML;navigator.clipboard.writeText(e).then((function(){console.debug("Citation copied!")})).catch((function(){console.error("Citation copy failed!")}))}))}));
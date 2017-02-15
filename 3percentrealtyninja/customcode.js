<script>
var
url = window.location.href;
agentname = $('.fn').html();
property = window.location.href;
temp = 'Requesting information in regards to: ' + window.location.href;
$('#listing_contactform_fields').replaceWith('<div id="wufoo-r14lvgx00qs5t2j"></div>');
</script>
<script type="text/javascript">
var r14lvgx00qs5t2j;(function(d, t) {
var s = d.createElement(t), options = {
'userName':'3percent',
'formHash':'r14lvgx00qs5t2j',
'autoResize':true,
'height':'475',
'async':true,
'defaultValues':'field8=temp&field14=property&field12=agentname' ,
'defaultValues':'field8='+ temp +'&field14='+ property +'&field12='+ agentname ,
'host':'wufoo.com',
'header':'show',
'ssl':true};
s.src = ('https:' == d.location.protocol ? 'https://' : 'http://') + 'www.wufoo.com/scripts/embed/form.js';
s.onload = s.onreadystatechange = function() {
var rs = this.readyState; if (rs) if (rs != 'complete') if (rs != 'loaded') return;
try { r14lvgx00qs5t2j = new WufooForm();r14lvgx00qs5t2j.initialize(options);r14lvgx00qs5t2j.display(); } catch (e) {}};
var scr = d.getElementsByTagName(t)[0], par = scr.parentNode; par.insertBefore(s, scr);
})(document, 'script');
</script>

<script>
var tels = document.querySelectorAll('.tel');

for (var i = 0; i < tels.length; ++i) {
  wrapTelLink(tels[i]);
}

function wrapTelLink(container) {
  var phoneNumber = container.innerText;
  container.innerHTML = '<a '+
    'href="tel:' + phoneNumber + '"' +
    '>' + phoneNumber + '</a>';
}
</script>

<script>
var tels = document.querySelectorAll('.agent_phone');

for (var i = 0; i < tels.length; ++i) {
  wrapTelLink(tels[i]);
}

function wrapTelLink(container) {
  var phoneNumber = container.innerText;
  container.innerHTML = '<a '+
    'href="tel:' + phoneNumber + '"' +
    '>' + phoneNumber + '</a>';
}
</script>

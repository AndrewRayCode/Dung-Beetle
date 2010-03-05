import re
f = open('dung-core.js', 'r')
o = open('dung-compressed.js', 'w')
lines = f.read().splitlines()
str = ''
for l in lines:
	str += re.sub('(^|\s)//.*', '', l)
o.write('dungCatch("'+re.sub("\t", "", re.sub('(\s|^)/\*.*?\*/', '', re.sub('"', '\\"', re.sub('\\\\', '\\\\\\\\', str)))) + '");')

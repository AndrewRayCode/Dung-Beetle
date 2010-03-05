import re
f = open('dung-core.js', 'r')
o = open('dung-compressed.js', 'w')
str = ''.join(f.read().splitlines())
o.write('dungCatch("'+re.sub('/\*.*\*/', '', re.sub('(^|\s)//', '', re.sub('\\\\', '\\\\\\\\', re.sub('"', '\\"', re.sub("\t", "", str))))) + '");')

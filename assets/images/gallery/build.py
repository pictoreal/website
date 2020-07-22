import json
import os
from PIL import Image
import shutil

def thumb(d, filename):
	filepath = "{}/{}".format(d,filename)
	im = Image.open(filepath)
	im.thumbnail((200,200))
	im.save("{}/thumbs/{}_tn{}".format(d, os.path.splitext(filename)[0], os.path.splitext(filename)[1]))
	return "{}/thumbs/{}_tn{}".format(d, os.path.splitext(filename)[0], os.path.splitext(filename)[1])
	
def get_first_image(d):
	for f in os.listdir("./{}".format(d)):
		if os.path.isfile("{}/{}".format(d,f)):
			return "{}/{}".format(d,f)
	return null

data = json.load(open("list_empty.json"));

dirs = os.listdir('.');
ida = 1
for d in dirs:
	if not os.path.isfile(d):
		print("Building Album :", d);
		if os.path.exists("{}/thumbs/".format(d)):
			shutil.rmtree("{}/thumbs".format(d))
		os.mkdir("{}/thumbs/".format(d))
		
		idp = 1;
		first = get_first_image(d)
		if first:
			data['items'].append({"title": d, "ID": ida, "src": first, "kind": "album"});
		
		for f in os.listdir("./{}".format(d)):
			if os.path.isfile("{}/{}".format(d,f)):
				print("{}/{}".format(d,f))
				tn = thumb(d,f)
				data['items'].append({"src": "{}/{}".format(d,f), "srct": tn, "albumID": ida, "ID": ida*1000+idp})
				idp+=1
		ida+=1
		print('')

json_object = json.dumps(data, indent = 4) 
  
# Writing to sample.json 
with open("list.json", "w") as outfile: 
    outfile.write(json_object)

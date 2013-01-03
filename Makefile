all: build

serve:
	`npm bin`/serve 

install:
	npm install --dev

build: app
	`npm bin`/r.js -o build.js

clean:
	rm -rf build

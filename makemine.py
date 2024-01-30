if __name__ == "__main__":
		typescript_file = "src/index.ts"
		extension_content_js = "github-phind-bar/content.js"

		with open(typescript_file, "r") as f:
			content = f.read()
			content = content.replace("fauzaanu", username)

		with open(typescript_file, "w") as f:
			f.write(content)

		with open(extension_content_js, "r") as f:
			content = f.read()
			content = content.replace("fauzaanu", username)

		with open(extension_content_js, "w") as f:
			f.write(content)


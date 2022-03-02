.PHONY: build

build: 
	sam build

deploy-infra:
	sam build && aws-vault exec gracious_resume --no-session -- sam deploy

deploy-site:
	aws-vault exec gracious_resume --no-session -- aws s3 sync ./resume-files s3://graciousresume

	
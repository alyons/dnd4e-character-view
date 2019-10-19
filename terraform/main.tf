provider "aws" {
  region = "us-east-1"
}

terraform {
    backend "s3" {
        bucket = "lyons-terraform"
        key = "charsheet.tfstate"
        region = "us-east-1"
    }
}

resource "aws_ecr_repository" "ecr_repository" {
    name = "character-sheet"
}

# variable "aws_access_key" {}
# variable "aws_secret_key" {}
# variable "aws_accound_id" {}
variable "aws_region" {
    type        = string
    description = "AWS region e.g. us-east-1 (Please specify a region supported by the Fargate launch type)"
    default     = "us-east-1"
}
variable "aws_resource_prefix" {
    type        = string
    description = "Prefix to be used in the naming of some AWS resources e.g. demo-webapp"
    default     = "character-sheet"
}
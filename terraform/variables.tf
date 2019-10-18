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
variable "vpc_id" {
    type        = string
    description = "VPC in which your cluster is running o"
    default     = "vpc-0d6167ae978259360"
}
variable "zone_id" {
    type = string
    description = "Hosted Zone Id for Route 53"
    default = "Z3K5R41ZR8SSIW"
}
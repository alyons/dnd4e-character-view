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

resource "aws_ecr_repository" "charsheet_repo" {
    name = "character-sheet"
}

resource "aws_ecs_cluster" "character_sheet_cluster" {
    name = "character-sheet-cluster"
}

resource "aws_ecs_task_definition" "character_sheet_task" {
    family = "character-sheet-task"
    container_definitions = "${file("./data/containerDefinitions.json")}"
    task_role_arn = "arn:aws:iam::387077767757:role/ecsTaskExecutionRole"
    execution_role_arn = "arn:aws:iam::387077767757:role/ecsTaskExecutionRole"
    network_mode = "awsvpc"
    cpu = 256
    memory = 512
    requires_compatibilities = ["FARGATE"]
}

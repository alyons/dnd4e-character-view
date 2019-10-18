resource "aws_ecs_cluster" "ecs_cluster" {
    name = "character-sheet-cluster"
}

resource "aws_ecs_task_definition" "frontend_task" {
    container_definitions       = "${file("./data/containerDefinitions.json")}"
    cpu                         = 256
    execution_role_arn          = "${aws_iam_role.ecs_task_execution.arn}"
    family                      = "character-sheet-task"
    memory                      = 512
    network_mode                = "awsvpc"
    requires_compatibilities    = ["FARGATE"]
    task_role_arn               = "${aws_iam_role.ecs_task_execution.arn}"
}

resource "aws_ecs_service" "character_sheet_service" {
    name = "character-sheet"
    task_definition = "${aws_ecs_task_definition.frontend_task.arn}"
    cluster = "${aws_ecs_cluster.ecs_cluster.id}"
    desired_count = 1
    health_check_grace_period_seconds = 15
    launch_type = "FARGATE"
    platform_version = "LATEST"

    deployment_controller {
        type = "ECS"
    }

    load_balancer {
        target_group_arn = "${aws_lb_target_group.ecs_alb.arn}"
        container_name = "character-sheet"
        container_port = 8080
    }

    network_configuration {
        assign_public_ip = true
        security_groups = ["${aws_security_group.character_sheet_service.id}"]
        subnets = ["subnet-014eed9bcd4ef65c0", "subnet-01f8003a0c93baff9"]
    }
}
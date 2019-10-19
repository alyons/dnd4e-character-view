resource "aws_iam_role" "ecs_service" {
    name = "charsheet_ecs_service_role"
    assume_role_policy = "${file("./data/assumeRolePolicy.json")}"
}

resource "aws_iam_role_policy" "ecs_service" {
    name = "charsheet_ecs_service_policy"
    role = "${aws_iam_role.ecs_service.name}"
    policy = "${file("./data/ecsServiceRolePolicy.json")}"
}

resource "aws_iam_role" "ecs_task_execution" {
    name = "charsheet_ecs_task_execution_role"
    assume_role_policy = "${file("./data/taskAssumeRole.json")}"
}

resource "aws_iam_role_policy" "ecs_task_execution" {
    name = "charsheet_ecs_task_execution_policy"
    role = "${aws_iam_role.ecs_task_execution.name}"
    policy = "${file("./data/taskExecutionPolicy.json")}"
}

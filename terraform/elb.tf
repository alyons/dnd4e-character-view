resource "aws_lb" "ecs_alb" {
    security_groups = ["${aws_security_group.ecs_alb.id}"]
    subnets = ["subnet-014eed9bcd4ef65c0", "subnet-01f8003a0c93baff9"]
}

resource "aws_lb_target_group" "ecs_alb" {
    name = "character-sheet-target-group"
    port = 8080
    protocol ="HTTP"
    vpc_id = "${var.vpc_id}"
    target_type = "ip"
}

resource "aws_lb_listener" "ecs_alb" {
    load_balancer_arn = "${aws_lb.ecs_alb.arn}"
    port = 443
    protocol = "HTTPS"
    ssl_policy = "ELBSecurityPolicy-2016-08"
    certificate_arn = "arn:aws:acm:us-east-1:387077767757:certificate/28036653-8477-4ed4-b207-058085a28e6c"

    default_action {
        type = "forward"
        target_group_arn = "${aws_lb_target_group.ecs_alb.arn}"
    }
}

resource "aws_lb_listener" "ecs_alb_http" {
    load_balancer_arn = "${aws_lb.ecs_alb.arn}"
    port = 80
    protocol = "HTTP"

    default_action {
        type = "redirect"

        redirect {
            port = 443
            protocol = "HTTPS"
            status_code = "HTTP_301"
        }
    }
}

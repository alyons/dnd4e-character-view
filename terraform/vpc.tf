resource "aws_security_group" "ecs_alb" {
    description = "Allow inbound internet traffic"
    vpc_id = "${var.vpc_id}"

    egress {
        from_port = 0
        to_port = 0
        protocol = "-1"
        cidr_blocks = ["0.0.0.0/0"]
    }

    ingress {
        from_port = 80
        to_port = 80
        protocol = "tcp"
        cidr_blocks = ["0.0.0.0/0"]
    }

    ingress {
        from_port = 443
        to_port = 443
        protocol = "tcp"
        cidr_blocks = ["0.0.0.0/0"]
    }
}

resource "aws_security_group" "character_sheet_service" {
    description = "Allow access within cluster and from loadbalancers"
    vpc_id = "${var.vpc_id}"

    egress {
        from_port = 0
        to_port = 0
        protocol = "-1"
        cidr_blocks = ["0.0.0.0/0"]
    }

    ingress {
        from_port = 0
        to_port = 0
        protocol = "-1"
        security_groups = ["${aws_security_group.ecs_alb.id}"]
    }
}

resource "aws_security_group_rule" "charsheet_self_ingress" {
    type = "ingress"
    from_port = 0
    to_port = 65535
    protocol = "-1"
    source_security_group_id = "${aws_security_group.character_sheet_service.id}"
    security_group_id = "${aws_security_group.character_sheet_service.id}"
}
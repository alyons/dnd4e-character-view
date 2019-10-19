resource "aws_route53_record" "frontend" {
    zone_id = "${var.zone_id}"
    name = "charsheet.platinumleo.com"
    type = "A"

    alias {
        name = "${aws_lb.ecs_alb.dns_name}"
        zone_id = "${aws_lb.ecs_alb.zone_id}"
        evaluate_target_health = true
    }
}

resource "aws_route53_record" "frontend-www" {
    zone_id = "${var.zone_id}"
    name = "www.charsheet.platinumleo.com"
    type = "A"

    alias {
        name = "${aws_lb.ecs_alb.dns_name}"
        zone_id = "${aws_lb.ecs_alb.zone_id}"
        evaluate_target_health = true
    }
}
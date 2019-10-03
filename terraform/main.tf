terraform {
  backend "local" {
    path = "./terraform.tfstate"
  }
}

provider "aws" {
  version = "~> 1.57"
  region = "${var.aws_region}"
}

# data "terraform_remote_state" "main" {
#   backend = "s3"
#   config {
#     bucket = "terraform-remote-state-${data.aws_caller_identity.current.account_id}"
#     key    = "${var.main_region_tf_state_file_name}"
#     region = "${var.aws_region}"
#   }
# }

data "aws_caller_identity" "current" {}
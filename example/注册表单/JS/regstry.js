$(function () {
    $("#newUser").focus();

    $("#newUser").blur(function () {
        var username = $("#newUser").val().trim();
        if (username == "") {
            $("#newUserTip").text("用户名不能为空");
            $("#sbt").prop("disabled", true);

        } else {
            $("#newUserTip").text("正在检查用户名......");
            $.getJSON("../PHP/reg.php", {
                    act: "checkUsername",
                    username: username
                },
                function (rs) {
                    if (rs['rs'] == 'yes') {
                        $("#newUserTip").text("用户名已存在");
                        $("#sbt").prop("disabled", true);
                        $("#newUserTip").focus();
                    } else {
                        $("#newUserTip").text("可用");
                        $("#sbt").prop("disabled", false);
                    }

                }
            );
        }

    })
    $("#name").blur(function () {
        var trueName = $("#name").val().trim();
        if (trueName == "") {
            $("#nameTip").text("请输入真实姓名")
            $("#sbt").prop("disabled", true);

        } else {
            $("#nameTip").text("输入正确");
            $("#sbt").prop("disabled", false);

        }
    })
    $("#pwd1").keyup(function () {
        var pwd1 = $("#pwd1").val().trim();
        if (pwd1 == "") {
            $("#pwd1Tip").text("请输入密码")
            $("#sbt").prop("disabled", true);

        } else {
            $("#pwd1Tip").text("输入正确");
            $("#sbt").prop("disabled", false);

        }
    })
    $("#pwd2").keyup(function () {
        var pwd2 = $("#pwd2").val().trim();
        var pwd1 = $("#pwd1").val().trim();
        if (pwd2 !== pwd1) {
            $("#pwd2Tip").text("密码不一致")
            $("#sbt").prop("disabled", true);

        } else {
            $("#pwd2Tip").text("输入正确");
            $("#sbt").prop("disabled", false);

        }
    })
    $("#sbt").click(function () {
        var username = $("#newUser").val().trim();
        var name = $("#name").val().trim();
        var pwd = $("#pwd1").val().trim();
        var sex = $("#sex[name='sex']:checked").val().trim();
        var age = $("#age").val().trim();
        var favor = "";
        $("#favor:checked").each(function (i) {
            if (i == 0) {
                avorv = $(this).val();
            } else {
                favor += (" " + $(this).val());
            }
        })
        var province = $("#province").val();
        var brief = $("#brief").val();

        $.post("../PHP/reg.php", {
                act: "createNewuser",
                username: username,
                trueName: name,
                userpwd: pwd,
                sex: sex,
                age: age,
                favor: favor,
                province: province,
                brief: brief
            },
            function (rs) {
                $("#sbtTip").text("正在创建新用户");
                $("#sbtTip").text(rs);
                if (rs['rs'] == 'yes') {
                    alert("注册成功");
                } else if (rs['rs'] == 'no') {
                    alert("注册失败");
                }
            }
        )

    })





})
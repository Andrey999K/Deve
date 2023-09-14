import React, { useEffect } from "react";
import CardWrapper from "../../../common/Card/CardWrapper";
import CardTitle from "../../../common/Card/CardTitle";
import Input from "../../../common/Form/Input";
import useForm from "../../../../hooks/useForm";
import Button from "../../../common/Button";
import notification from "../../../../utils/notification";

const AdminPasswordReset = () => {
  const { form, handleChange, handleSubmit, errors } = useForm({
    password: "Empty",
    passwordRepeat: "Empty",
    codeAuthorizationBot: "Empty"
  });
  useEffect(() => {
    if (Object.keys(errors).length !== 0) {
      console.log(Object.keys(errors));
      for (const key in errors) {
        console.log(errors[key].message);
        notification("error", errors[key].message);
      }
    }
  }, [errors]);
  return (
    <CardWrapper className="w-full text-[13px]">
      <CardTitle>Сброс пароля</CardTitle>
      <form
        className="flex flex-col gap-5"
        onSubmit={handleSubmit}
      >
        <Input
          value={form.password}
          onChange={handleChange}
          label="Введите пароль"
          name="password"
          type="password"
          error={errors.password ? "error" : ""}
        />
        <Input
          value={form.passwordRepeat}
          onChange={handleChange}
          label="Подтвердите пароль"
          name="passwordRepeat"
          type="password"
        />
        <Input
          value={form.codeAuthorizationBot}
          onChange={handleChange}
          label="Код от бота авторизации"
          name="codeAuthorizationBot"
        />
        <div>
          <Button className="py-4 px-10 !w-auto">Сохранить</Button>
        </div>
      </form>
    </CardWrapper>
  );
};

export default React.memo(AdminPasswordReset);

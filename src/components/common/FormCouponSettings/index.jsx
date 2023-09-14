import React from "react";
import CardTitle from "../Card/CardTitle";
import Input from "../Form/Input";
import InputCheckbox from "../Form/InputCheckbox";
import Button from "../Button";
import CardWrapper from "../Card/CardWrapper";
import useForm from "../../../hooks/useForm";

const FormCouponSettings = () => {
  const { form, handleChange, handleSubmit } = useForm({
    promoCode: "Empty",
    numberOfActivations: "Empty",
    discount: "Empty",
    minimumOrderAmount: "Empty",
    onlyFirstBuy: false,
    preventMultiCoupon: false
  });
  return (
    <CardWrapper>
      <CardTitle>Настройки купона</CardTitle>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 text-[13px]">
        <Input
          value={form.promoCode}
          label="Промокод (Кодовое слово)"
          onChange={handleChange}
          name="promoCode"
        />
        <div className="flex gap-5">
          <Input
            value={form.numberOfActivations}
            label="Количество активаций"
            onChange={handleChange}
            name="numberOfActivations"
            className="w-full"
          />
          <div className="max-w-[35%] w-full">
            <Input
              value={form.discount}
              label="Размер скидки"
              onChange={handleChange}
              name="discount"
            />
          </div>
        </div>
        <div className="flex gap-5 items-center">
          <Input
            value={form.minimumOrderAmount}
            label="Минимальная сумма заказа"
            onChange={handleChange}
            name="minimumOrderAmount"
            className="w-full"
          />
          <p className="text-[11px] w-full">
            Например, для значения 10. При конечной стоимости заказа 50, после применения купона, стоимость заказа станет 40
            Если размер данного значения превысит стоимость заказа, то весь заказ будет выдан бесплатно!
          </p>
        </div>
        <InputCheckbox
          onChange={handleChange}
          checked={form.onlyFirstBuy}
          name="onlyFirstBuy"
          label="Только на первую покупку"
        />
        <InputCheckbox
          onChange={handleChange}
          checked={form.preventMultiCoupon}
          name="preventMultiCoupon"
          label="Запретить использовать купон одному клиенту несколько раз"
        />
        <div>
          <Button className="py-4 px-8 max-w-[150px]">Создать</Button>
        </div>
      </form>
    </CardWrapper>
  );
};

export default FormCouponSettings;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCreatureColor } from "../../store/actions/profileActions/profileActions";
import { Button } from "../common/ui";

export const ProfileForm = () => {
  const dispatch = useDispatch();
  const { mainColor, eyeColor, secondaryColor } = useSelector(({ profile }) => {
    const { mainColor, eyeColor, secondaryColor } = profile.creature;

    return { mainColor, eyeColor, secondaryColor };
  });

  const onColorPickerChange = (event) => {
    const element = event.currentTarget;
    const targetKey = element.id;
    const colorValue = element.value;

    dispatch(setCreatureColor(targetKey, colorValue));
  };

  const onSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      <div className="flex justify-between">
        <label htmlFor="mainColor">Main Color</label>

        <input
          type="color"
          name="mainColor"
          id="mainColor"
          value={mainColor}
          onChange={onColorPickerChange}
        />
      </div>

      <div className="flex justify-between">
        <label htmlFor="secondaryColor">Secondary Color</label>

        <input
          type="color"
          name="secondaryColor"
          id="secondaryColor"
          value={secondaryColor}
          onChange={onColorPickerChange}
        />
      </div>

      <div className="flex justify-between">
        <label htmlFor="eyeColor">Eye Color</label>

        <input
          type="color"
          name="eyeColor"
          id="eyeColor"
          value={eyeColor}
          onChange={onColorPickerChange}
        />
      </div>

      <div className="text-center">
        <Button type="submit" title="Save">
          save
        </Button>
      </div>
    </form>
  );
};

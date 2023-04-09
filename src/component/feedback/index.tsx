import { ButtonSend } from "../common/button-send";
import { Input } from "../common/input";
import { TextArea } from "../common/text-area";

export const Feedback = () => {
  return (
    <section className="px-5 lg:px-0  py-16 bg-[#404040] ">
      <div className="custom-container ">
        <div className="text-white text-center mb-3 font-medium text-lg">
            Để được tư vấn chi tiết
        </div>
        <Input label="Tên *" placeholder="Nhập tên của bạn" />
        <Input label="Email *" placeholder="Email" />
        <Input
          label="Điện thoại *"
          placeholder="Cho Láng xin số điện thoại nhé"
        />
        <TextArea
          label="Điện thoại *"
          placeholder="Cho Láng xin số điện thoại nhé"
          rows={3}
        />
        <ButtonSend />
      </div>
    </section>
  );
};

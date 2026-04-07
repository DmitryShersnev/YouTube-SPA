import { Modal } from "antd";
import { useSelector } from "react-redux";
import { selectIsOpen } from "./redux/ModalSlice";
import { close } from "./redux/ModalSlice";
import { useDispatch } from "react-redux";
import { addFavorite, updateFavorite } from "./redux/FavoritesSlice";
import { useEffect } from "react";

import { selectInputSearch } from "./redux/InputSearchSlice";
import { Form, Input, Select, Slider } from "antd";

const ModalWindow = ({ item }) => {
  const inputSearch = useSelector(selectInputSearch);
  const isOpen = useSelector(selectIsOpen);
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({ request: inputSearch });
  }, [inputSearch, form]);
  useEffect(() => {
    if (item) {
      form.setFieldsValue({
        request: item.request,
        name: item.name,
        sortBy: item.sortBy,
        amount: item.amount,
      });
    }
  }, [item, form]);

  const handleClickOk = async (values) => {
    if (item) {
      dispatch(updateFavorite({ ...item, ...values }));
    } else {
      dispatch(addFavorite(values));
    }

    dispatch(close());
    await form.resetFields();
  };
  const handleClickCancel = () => {
    dispatch(close());
  };

  return (
    <>
      <Modal
        title="Сохранить запрос"
        closable={{ "aria-label": "Custom Close Button" }}
        open={isOpen}
        onOk={() => form.submit()}
        onCancel={handleClickCancel}
        okText={"Сохранить"}
        cancelText={"Не сохранять"}
      >
        <>
          <Form
            form={form}
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 15 }}
            style={{ maxWidth: 600 }}
            initialValues={{
              request: inputSearch,
              name: "",
              sortBy: "relevance",
              amount: 25,
            }}
            onFinish={(values) => handleClickOk(values)}
          >
            <Form.Item label="Запрос" name="request">
              <Input />
            </Form.Item>
            <Form.Item
              label="Название"
              name="name"
              rules={[{ required: true, message: "Напишите название!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item label="Сортировать по" name="sortBy">
              <Select
                options={[
                  { label: "По дате", value: "date" },
                  { label: "По рейтингу", value: "rating" },
                  { label: "По релевантности", value: "relevance" },
                  { label: "По названию", value: "title" },
                  { label: "По количеству видео", value: "videoCount" },
                  { label: "По просмотрам", value: "viewCount" },
                ]}
              />
            </Form.Item>

            <Form.Item label="Количество" name="amount">
              <Slider max={50} />
            </Form.Item>
          </Form>
        </>
      </Modal>
    </>
  );
};
export default ModalWindow;

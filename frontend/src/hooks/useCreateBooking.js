import { useState, useEffect, useContext } from "react";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import { AppContext } from "../context/AppContext";

const useBooking = (tour, navigate) => {
  const { user } = useContext(AppContext);
  const { t } = useTranslation();

  const { title = "", price = 0 } = tour || {};

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    travelers: 1,
    specialRequests: "",
  });

  const [totalPrice, setTotalPrice] = useState(price);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (user) {
      setFormData((prev) => ({
        ...prev,
        name: user.name || "",
        email: user.email || "",
        phone: user.phone || "",
      }));
    }
  }, [user]);

  useEffect(() => {
    const newTotal = price * parseInt(formData.travelers || 1, 10);
    setTotalPrice(newTotal);
  }, [formData.travelers, price]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { name, email, phone } = formData;

    if (!name || !email || !phone) {
      toast.error(t("booking.requiredFields"));
      setIsSubmitting(false);
      return;
    }

    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/bookings`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            ...formData,
            tourId: tour.id,
            tourTitle: tour.title,
            totalPrice,
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to create booking");
      }

      const data = await response.json();
      toast.success(t("booking.bookingSuccess"));
      setFormData((prev) => ({
        ...prev,
        travelers: 1,
        specialRequests: "",
      }));
      
      // Navigate to My Bookings page after successful booking
      if (navigate) {
        navigate("/my-booking");
      }
    } catch (error) {
      console.error("Booking error:", error);
      toast.error(t("booking.bookingError") + ": " + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    totalPrice,
    isSubmitting,
    title,
    handleChange,
    handleSubmit,
  };
};

export default useBooking;

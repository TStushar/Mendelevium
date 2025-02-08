import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Yup validation schema (no required fields)
const schema = yup.object().shape({
  name: yup.string().optional(),
  email: yup.string().email("Invalid email").optional(),
  profilePicture: yup.string().optional(),
  linkedin: yup.string().url("Invalid URL").optional(),
  industry: yup.string().optional(),
  location: yup.string().optional(),
  graduationYear: yup.number().optional(),
  degree: yup.string().optional(),
  company: yup.string().optional(),
  position: yup.string().optional(),
  contactEmail: yup.string().email("Invalid email").optional(),
  helpingHand: yup.string().optional(),
  about: yup.string().optional(),
  experience: yup.string().optional(),
});

export const UserProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isSaveVisible, setIsSaveVisible] = useState(false);

  // Default form data
  const defaultValues = {
    name: "John Doe",
    email: "johndoe@example.com",
    profilePicture: "https://example.com/profile.jpg",
    linkedin: "https://linkedin.com/in/johndoe",
    industry: "Software",
    location: "San Francisco, CA",
    graduationYear: 2022,
    degree: "B.Tech in Computer Science",
    company: "TechCorp",
    position: "Software Engineer",
    contactEmail: "johndoe.contact@example.com",
    helpingHand: "Yes, I am open to mentorship.",
    about: "A passionate software engineer with a love for coding and innovation.",
    experience: "2+ years working in software development, primarily focused on full-stack applications.",
  };

  const { register, handleSubmit, formState: { errors }, setValue } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Form data submitted: ", data);
    // Send the data to your backend here
    setIsEditing(false);
    setIsSaveVisible(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
    setIsSaveVisible(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setIsSaveVisible(false);
    // Reset the form to its default values
    Object.keys(defaultValues).forEach(key => setValue(key, defaultValues[key]));
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">User Profile</h2>

      {/* Education Section */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Education</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700">Degree</label>
            <input
              type="text"
              className="mt-1 p-2 w-full border rounded"
              {...register("degree")}
              disabled={!isEditing}
            />
            {errors.degree && <p className="text-red-500 text-sm">{errors.degree.message}</p>}
          </div>

          <div>
            <label className="block text-gray-700">College</label>
            <input
              type="text"
              className="mt-1 p-2 w-full border rounded"
              {...register("college")}
              disabled={!isEditing}
            />
            {errors.college && <p className="text-red-500 text-sm">{errors.college.message}</p>}
          </div>

          <div>
            <label className="block text-gray-700">Graduation Year</label>
            <input
              type="number"
              className="mt-1 p-2 w-full border rounded"
              {...register("graduationYear")}
              disabled={!isEditing}
            />
            {errors.graduationYear && <p className="text-red-500 text-sm">{errors.graduationYear.message}</p>}
          </div>

          <div>
            <label className="block text-gray-700">Skills</label>
            <input
              type="text"
              className="mt-1 p-2 w-full border rounded"
              {...register("skills")}
              disabled={!isEditing}
            />
            {errors.skills && <p className="text-red-500 text-sm">{errors.skills.message}</p>}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Contact</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700">LinkedIn Profile</label>
            <input
              type="url"
              className="mt-1 p-2 w-full border rounded"
              {...register("linkedin")}
              disabled={!isEditing}
            />
            {errors.linkedin && <p className="text-red-500 text-sm">{errors.linkedin.message}</p>}
          </div>

          <div>
            <label className="block text-gray-700">Phone Number</label>
            <input
              type="text"
              className="mt-1 p-2 w-full border rounded"
              {...register("phone")}
              disabled={!isEditing}
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
          </div>

          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="mt-1 p-2 w-full border rounded"
              {...register("email")}
              disabled={!isEditing}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block text-gray-700">Social Media Link</label>
            <input
              type="url"
              className="mt-1 p-2 w-full border rounded"
              {...register("socialMedia")}
              disabled={!isEditing}
            />
            {errors.socialMedia && <p className="text-red-500 text-sm">{errors.socialMedia.message}</p>}
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">About</h3>
        <textarea
          className="mt-1 p-2 w-full border rounded"
          {...register("about")}
          disabled={!isEditing}
        />
        {errors.about && <p className="text-red-500 text-sm">{errors.about.message}</p>}
      </div>

      {/* Experience Section */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Experience</h3>
        <textarea
          className="mt-1 p-2 w-full border rounded"
          {...register("experience")}
          disabled={!isEditing}
        />
        {errors.experience && <p className="text-red-500 text-sm">{errors.experience.message}</p>}
      </div>

      {/* Buttons */}
      <div className="flex space-x-4">
        {isEditing ? (
          <>
            <button
              type="button"
              onClick={handleSubmit(onSubmit)}
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Save
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="px-4 py-2 bg-gray-500 text-white rounded"
            >
              Cancel
            </button>
          </>
        ) : (
          <button
            type="button"
            onClick={handleEdit}
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

// export default UserProfile;

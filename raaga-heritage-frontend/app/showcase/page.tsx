"use client";

import { useState } from "react";

import {
  Button,
  Input,
  Modal,
  Toast,
  Loader,
} from "@/components/ui";

export default function ShowcasePage() {
  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState(false);

  return (
    <main className="max-w-5xl mx-auto p-8">

      <h1 className="text-4xl font-bold mb-10">
        UI Component Showcase
      </h1>

      {/* Button */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          Button Component
        </h2>

        <Button
          text="Open Modal"
          onClick={() => setShowModal(true)}
        />
      </section>

      {/* Input */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          Input Component
        </h2>

        <Input placeholder="Enter your name" />
      </section>

      {/* Loader */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          Loader Component
        </h2>

        <Loader size={50} />
      </section>

      {/* Toast */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          Toast Component
        </h2>

        <button
          className="primary-btn"
          onClick={() => {
            setShowToast(true);

            setTimeout(() => {
              setShowToast(false);
            }, 3000);
          }}
        >
          Show Toast
        </button>
      </section>

      {/* Modal */}
      <Modal
        isOpen={showModal}
        title="Demo Modal"
      >
        <p className="mb-4">
          This is the Modal component demonstration.
        </p>

        <button
          className="primary-btn"
          onClick={() => setShowModal(false)}
        >
          Close
        </button>
      </Modal>

      {/* Toast */}
      {showToast && (
        <Toast message="Component Library Working Successfully!" />
      )}
    </main>
  );
}
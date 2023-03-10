import Banner from "@/components/Banner/Banner";
import styles from "./photo.module.css";
import { useState } from "react";
import BasicButton from "@/components/BasicButton/BasicButton";
import Link from "next/link";

export default function ChoosePhoto() {
  const [file, setFile] = useState();
  return (
    <>
      <div className={styles.container}>
        <Banner />
        <div className={styles.text}>Wybierz zdjęcie</div>
        <div className={styles.uploadPhoto}>
          <label for="file-upload" className={styles.button}>
            Upload Photo
          </label>
          <input
            type="file"
            name="myImage"
            accept="image/*"
            id="file-upload"
            className={styles.input}
            onChange={(event) => {
              console.log(event.target.files[0]);
              setFile(URL.createObjectURL(event.target.files[0]));
            }}
          />
          <img alt={file} src={file} className={styles.image} />
        </div>
        <textarea
          placeholder="Napisz pare zdań o sobie..."
          className={styles.textArea}
        />
        <Link href="/informations" className={styles.nextButton}>
          <BasicButton text="Dalej" fontSize={24} />
        </Link>
      </div>
    </>
  );
}

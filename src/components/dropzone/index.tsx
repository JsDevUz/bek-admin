import React, { useEffect, useState, useId } from "react";
import { useDropzone } from "react-dropzone";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { FaRegStar, FaStar } from "react-icons/fa6";
import Label from "../label";

const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 16,
};

const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: "border-box",
};

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
  borderRadius: "10px",
};

const img = {
  display: "block",
  backgroundColor: "white",
  objectFit: "cover",
  width: "160px",
  height: "160px",
};

function Previews({ label }) {
  const [files, setFiles] = useState([]);
  const uniqueId = useId();
  console.log(files.length);

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop: (acceptedFiles) => {
      setFiles((prevFiles) => [
        ...prevFiles,
        ...acceptedFiles.map((file, index) => ({
          ...file,
          preview: URL.createObjectURL(file),
          id: `${uniqueId}-${prevFiles.length + index}`,
          isMain: prevFiles.length === 0, // Combine `useId` with index for unique IDs
        })),
      ]);
    },
  });

  useEffect(() => {
    // Clean up previews on unmount
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [files]);

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const reorderedFiles = Array.from(files);
    const [removed] = reorderedFiles.splice(result.source.index, 1);
    reorderedFiles.splice(result.destination.index, 0, removed);

    setFiles(reorderedFiles);
  };
  const changeMain = (id) => {
    setFiles((prevFiles) =>
      prevFiles.map((file) =>
        file.id === id ? { ...file, isMain: true } : { ...file, isMain: false }
      )
    );
  };
  return (
    <div className="flex flex-col w-[100%]">
      <Label label={label} />
      <section className="container mt-[10px]">
        <div
          {...getRootProps({ className: "dropzone" })}
          className="bg-white rounded-[10px] p-[20px] flex items-center justify-center"
        >
          <input {...getInputProps()} />
          <p>Rasimni ushbu maydonchaga tashlang yoki Tanlsh uchun osing</p>
        </div>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="thumbnails" direction="horizontal">
            {(provided) => (
              <aside
                style={thumbsContainer}
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {files.map((file, index) => (
                  <Draggable key={file.id} draggableId={file.id} index={index}>
                    {(provided) => (
                      <div
                        className="w-[160px] h-[160px] relative mr-[10px]"
                        style={thumb}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <div className="absolute right-[5px] top-[5px] z-20">
                          {file.isMain ? (
                            <FaStar color="blue" />
                          ) : (
                            <FaRegStar
                              color="red"
                              onClick={() => changeMain(file.id)}
                            />
                          )}
                        </div>
                        <div style={thumbInner}>
                          <img
                            src={file.preview}
                            style={img}
                            alt={file.name}
                            onLoad={() => URL.revokeObjectURL(file.preview)}
                          />
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </aside>
            )}
          </Droppable>
        </DragDropContext>
      </section>
    </div>
  );
}

export default Previews;

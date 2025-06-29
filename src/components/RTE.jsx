import React from 'react'
import {Editor} from '@tinymce/tinymce-react'
import {Controller} from 'react-hook-form'



//yaha jo control le rhe hai whi actually react Hook form ka control hai jo responsible hai aur yhi responsible hai is form ki saari state wagera ko le jane ke liye jaha bhi is element ka use karenge ise as a prop pass karenge
const RTE = ({name,control,label,defaultValue=""}) => {
  return (
    <div className='w-full'>
    
    {label && <label className='inline-block mb-1 pl-1'>{label}</label>}
    <Controller name={name || "Content"} control={control} render={({field:{onChange}})=>(
        <Editor
        apiKey='61fnptzmwkq6u30w1mslu0rp0kp0fnzq47kr63afw4mgjk3z'
        initialValue={defaultValue}
        init={{
            initialValue: defaultValue,
            height: 500,
            menubar: true,
            plugins: [
                "image",
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
                "anchor",
            ],
            toolbar:
            "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
            content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
        }}
        onEditorChange={onChange}
        // ye upar wala hi onChange hai jab bhi kuch change hoga whi onChange chize govern karega
        />
    )}/>

    


    </div>
  )
}

export default RTE
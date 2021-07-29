import React, { useEffect, useRef, useState } from 'react'

export default function MyEditor(): JSX.Element {
    const editorRef = useRef()
    const [editorLoaded, setEditorLoaded] = useState(false)
    const { CKEditor, ClassicEditor } = editorRef.current || ({} as any)

    useEffect(() => {
        editorRef.current = {
            CKEditor: require('@ckeditor/ckeditor5-react').CKEditor,
            ClassicEditor: require('@ckeditor/ckeditor5-build-classic'),
        } as any
        setEditorLoaded(true)
    }, [])

    return editorLoaded ? (
        <CKEditor
            editor={ClassicEditor}
            data="<p>Hello from CKEditor 5!</p>"
            onReady={(editor) => {
                // You can store the "editor" and use when it is needed.
                console.log('Editor is ready to use!', editor)
            }}
            onChange={(event, editor) => {
                const data = editor.getData()
                console.log({ event, editor, data })
            }}
        />
    ) : (
        <div>Editor loading</div>
    )
}

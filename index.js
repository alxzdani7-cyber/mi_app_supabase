import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://mjthgfuoiehfuunwsfxf.supabase.co'
const supabaseKey = 'sb_publishable__gCy_ZLzVge8LC0ky2Be_w_eEFMNQm4'

const supabase = createClient(supabaseUrl, supabaseKey)

async function ejecutarPractica() {
    console.log('--- 1. Insertando nuevo estudiante ---');
    const { data: dataInsert, error: errorInsert } = await supabase
        .from('Estudiantes')
        .insert([{ nombre: 'Alejandro Daniel', carrera: 'Ingeniería' }])
        .select()

    if (errorInsert) {
        console.log('Error al insertar:', errorInsert.message)
    } else {
        console.log('¡Éxito! Insertado:', dataInsert)
    }

    console.log('\n--- 2. Consultando lista actualizada ---');
    const { data: lista, error: errorLista } = await supabase
        .from('Estudiantes')
        .select('*')

    if (errorLista) {
        console.log('Error al consultar:', errorLista.message)
    } else {
        console.table(lista)
    }
}

ejecutarPractica()
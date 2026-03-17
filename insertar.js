import { createClient } from '@supabase/supabase-js'

// Configuración de conexión
const supabaseUrl = 'https://mjthgfuoiehfuunwsfxf.supabase.co'
const supabaseKey = 'sb_publishable__gCy_ZLzVge8LC0ky2Be_w_eEFMNQm4'

const supabase = createClient(supabaseUrl, supabaseKey)

async function insertarEstudiante() {
    console.log('--- Iniciando inserción manual ---');
    
    const { data, error } = await supabase
        .from('Estudiantes') // Con E mayúscula como descubrimos
        .insert([
            { nombre: 'Alejandro Daniel', carrera: 'Ingeniería' }
        ])
        .select()

    if (error) {
        console.error('Error al insertar:', error.message);
    } else {
        console.log('¡Registro creado con éxito en Supabase!');
        console.table(data);
    }
}

insertarEstudiante();